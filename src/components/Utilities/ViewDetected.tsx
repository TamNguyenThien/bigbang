import React, { createContext, FunctionComponent, useContext } from 'react';
import nextDynamic, { DynamicOptions, Loader } from 'next/dynamic';

type DeviceType = 'desktop' | 'tablet' | 'mobile';

export const getDeviceType = (userDetected: MobileDetect): DeviceType => {
    if (userDetected.tablet()) {
        return 'tablet';
    }

    if (userDetected.mobile()) {
        return 'mobile';
    }

    return 'desktop';
};

interface ViewDetectedContextType {
    deviceType: DeviceType;

}

type ViewDetectedProps = ViewDetectedContextType;

const VIEW_DETECTED_CONTEXT_VALUE: ViewDetectedContextType = {
    deviceType: 'desktop',
};

const ViewDetectedContext = createContext(VIEW_DETECTED_CONTEXT_VALUE);
export const useViewDetected = () => useContext(ViewDetectedContext);

const ViewDetected: FunctionComponent<ViewDetectedProps> = ({ deviceType, ...props }) => {
    console.log('**** cc deviceType123', deviceType);
    return <ViewDetectedContext.Provider value={{ deviceType }}>{props.children}</ViewDetectedContext.Provider>;
};

export default ViewDetected;

interface ViewMediaProps {
    dynamicOptions?: DynamicOptions;
    dynamic?: DynamicOptions | Loader;
    is?: DeviceType | Array<'desktop' | 'tablet' | 'mobile'>;

}



