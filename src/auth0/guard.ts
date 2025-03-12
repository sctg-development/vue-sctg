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
import { useAuth0 } from './instance';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore -- optional interface, will gracefully degrade to `any` if `vue-router` isn't installed
import type { NavigationGuard } from 'vue-router';

export function authGuard(
  callback: (
    isAuthenticated: boolean,
    to: Parameters<NavigationGuard>[0],
    from: Parameters<NavigationGuard>[1]
  ) => ReturnType<NavigationGuard>
): NavigationGuard {
  return async (to, from) => {
    const { isAuthenticated, initializationCompleted } = useAuth0();

    await initializationCompleted();

    return callback(isAuthenticated.value, to, from);
  };
}

export const redirectToLoginGuard = authGuard(async (isAuthenticated, to) => {
  const { loginWithRedirect } = useAuth0();

  // If the user is authenticated, continue with the route
  if (isAuthenticated) {
    return;
  }

  // Otherwise, log in
  await loginWithRedirect({ appState: { targetUrl: to.fullPath } });
});
