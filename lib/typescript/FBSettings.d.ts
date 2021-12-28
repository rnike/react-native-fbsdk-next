/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
declare const _default: {
    /**
     * For iOS only, get AdvertiserTrackingEnabled status.
     * @platform ios
     */
    getAdvertiserTrackingEnabled(): Promise<boolean>;
    /**
     * For iOS only, set AdvertiserTrackingEnabled status, only works in iOS 14 and above.
     * @platform ios
     */
    setAdvertiserTrackingEnabled(ATE: boolean): Promise<boolean>;
    /**
     * Set data processing options
     */
    setDataProcessingOptions(options: Array<string>, ...args: Array<number>): void;
    /**
     * Initialize the sdk
     */
    initializeSDK(): void;
    /**
     * Set app id
     */
    setAppID(appID: string): void;
};
export default _default;
