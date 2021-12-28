/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Developer Principles and Policies
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @format
 */
export declare type AccessTokenMap = {
    accessToken: string;
    permissions: Array<string>;
    declinedPermissions: Array<string>;
    expiredPermissions: Array<string>;
    applicationID: string;
    userID: string;
    expirationTime: number;
    lastRefreshTime: number;
    dataAccessExpirationTime: number;
    accessTokenSource?: string;
};
/**
 * Represents an immutable access token for using Facebook services.
 */
declare class FBAccessToken {
    /**
     * The access token string.
     */
    accessToken: string;
    /**
     * The known granted permissions.
     */
    permissions: Array<string>;
    /**
     * The known declined permissions.
     */
    declinedPermissions: Array<string>;
    /**
     * The known expired permissions.
     */
    expiredPermissions: Array<string>;
    /**
     * The app ID.
     */
    applicationID: string;
    /**
     * The user ID.
     */
    userID: string;
    /**
     * The expiration time of the access token.
     * The value is the number of milliseconds since Jan. 1, 1970, midnight GMT.
     */
    expirationTime: number;
    /**
     * The last refresh time of the access token.
     * The value is the number of milliseconds since Jan. 1, 1970, midnight GMT.
     */
    lastRefreshTime: number;
    /**
     * The data access expiration time of the access token.
     * The value is the number of milliseconds since Jan. 1, 1970, midnight GMT.
     */
    dataAccessExpirationTime: number;
    /**
     * The source of access token.
     * @platform android
     */
    accessTokenSource?: string;
    constructor(tokenMap: AccessTokenMap);
    /**
     * Getter for the access token that is current for the application.
     */
    static getCurrentAccessToken(): Promise<FBAccessToken | null>;
    /**
     * Setter for the access token that is current for the application.
     */
    static setCurrentAccessToken(accessToken: AccessTokenMap): void;
    /**
     * Updates the current access token with up to date permissions,
     * and extends the expiration date, if extension is possible.
     */
    static refreshCurrentAccessTokenAsync(): Promise<AccessTokenMap>;
    /**
     * Adds a listener for when the access token changes. Returns a functions which removes the
     * listener when called.
     */
    static addListener(listener: (accessToken: FBAccessToken | null) => void): () => void;
    /**
     * Gets the date at which the access token expires. The value is the number of
     * milliseconds since Jan. 1, 1970, midnight GMT.
     */
    getExpires(): number;
    /**
     * Get the list of permissions associated with this access token. Note that the most up-to-date
     * list of permissions is maintained by Facebook, so this list may be outdated if permissions
     * have been added or removed since the time the AccessToken object was created. See
     * https://developers.facebook.com/docs/reference/login/#permissions for details.
     */
    getPermissions(): string[];
    /**
     * Gets the list of permissions declined by the user with this access token. It represents the
     * entire set of permissions that have been requested and declined. Note that the most
     * up-to-date list of permissions is maintained by Facebook, so this list may be outdated if
     * permissions have been granted or declined since the last time an AccessToken object was
     * created. See https://developers.facebook.com/docs/reference/login/#permissions for details.
     */
    getDeclinedPermissions(): string[];
    getExpiredPermissions(): string[];
    /**
     * Gets the date at which the token was last refreshed. Since tokens expire, the Facebook SDK
     * will attempt to renew them periodically. The value is the number of milliseconds since
     * Jan. 1, 1970, midnight GMT.
     */
    getLastRefresh(): number;
    getDataAccessExpiration(): number;
    /**
     * Gets the ID of the Facebook Application associated with this access token.
     */
    getApplicationId(): string;
    /**
     * Gets user ID associated with this access token.
     */
    getUserId(): string;
}
export default FBAccessToken;
