<template>
  <div id="hcap-script" />
</template>

<script>
/**
=========================================================
* © 2019-2025 Ronan LE MEILLAT for SCTG Development
* 
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
=========================================================
*/
import {loadApiEndpointIfNotAlready} from './hcaptcha-script';

export default {
    name: 'VueHcaptcha',
    props: {
        sitekey: {
            type: String,
            required: true
        },
        theme: {
            type: String,
            default: undefined
        },
        size: {
            type: String,
            default: undefined
        },
        tabindex: {
            type: String,
            default: undefined
        },
        language: {
            type: String,
            default: undefined
        },
        reCaptchaCompat: {
            type: Boolean,
            default: true
        },
        challengeContainer: {
            type: String,
            default: undefined
        },
        rqdata: {
            type: String,
            default: undefined
        },
        sentry: {
            type: Boolean,
            default: true
        },
        apiEndpoint: {
            type: String,
            default: 'https://hcaptcha.com/1/api.js'
        },
        endpoint: {
            type: String,
            default: undefined
        },
        reportapi: {
            type: String,
            default: undefined
        },
        assethost: {
            type: String,
            default: undefined
        },
        imghost: {
            type: String,
            default: undefined
        },
    },
    data: () => {
        return {
            widgetId: null,
            hcaptcha: null,
            renderedCb : null,
        };
    },
    mounted() {
        return loadApiEndpointIfNotAlready(this.$props).then(this.onApiLoaded).catch(this.onError);
    },
    unmounted() {
        this.teardown();
    },
    methods: {
        teardown() {
            if (this.widgetId) {
                this.hcaptcha.reset(this.widgetId);
                this.hcaptcha.remove(this.widgetId);
            }
        },
        onApiLoaded() {
            this.hcaptcha = window.hcaptcha;
            const opt = {
                sitekey: this.sitekey,
                theme: this.theme,
                size: this.size,
                tabindex: this.tabindex,
                'callback': this.onVerify,
                'expired-callback': this.onExpired,
                'chalexpired-callback': this.onChallengeExpired,
                'error-callback': this.onError,
                'open-callback': this.onOpen,
                'close-callback': this.onClose
            };
            if (this.challengeContainer) {
                opt['challenge-container'] = this.challengeContainer;
            }
            this.widgetId = this.hcaptcha.render(this.$el, opt);
            if (this.rqdata) {
                this.hcaptcha.setData(this.widgetId, {rqdata: this.rqdata});
            }
            this.onRendered();
        },
        execute() {
            if (this.widgetId) {
                this.hcaptcha.execute(this.widgetId);
                this.onExecuted();
            } else {
                // execute after el is rendered
                // we use a custom cb since `$on` was removed in vue3
                this.renderedCb = () => {
                    this.renderedCb = null;
                    this.execute();
                };
            }
        },
        reset() {
            if (this.widgetId) {
                this.hcaptcha.reset(this.widgetId);
                this.onReset();
            } else {
                this.$emit('error', 'Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.');
            }
        },
        onRendered() {
            this.$emit('rendered');
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            this.renderedCb && this.renderedCb();
        },
        onExecuted() {
            this.$emit('executed');
        },
        onReset() {
            this.$emit('reset');
        },
        onError(e) {
            this.$emit('error', e);
            this.reset();
        },
        onVerify() {
            const token = this.hcaptcha.getResponse(this.widgetId);
            const eKey = this.hcaptcha.getRespKey(this.widgetId);
            this.$emit('verify', token, eKey);
        },
        onExpired() {
            this.$emit('expired');
        },
        onChallengeExpired() {
            // vue3 will transform this `camelCase` event name into `kebab-case`
            this.$emit('challengeExpired');
        },
        onOpen() {
            this.$emit('opened');
        },
        onClose() {
            this.$emit('closed');
        }
    }
};
</script>
