import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Import solid weight icons (in alphabetical order)
import {
    faBarcode as fasBarcode,
    faBatteryHalf as fasBatteryHalf,
    faCheck as fasCheck,
    faCity as fasCity,
    faClock as fasClock,
    faCloud as fasCloud,
    faCode as fasCode,
    faCog as fasCog,
    faExchangeAlt as fasExchangeAlt,
    faExclamationCircle as fasExclamationCircle,
    faExclamationTriangle as fasExclamationTriangle,
    faExternalLinkAlt as fasExternalLinkAlt,
    faEye as fasEye,
    faFilter as fasFilter,
    faHandPointer as fasHandPointer,
    faHeartbeat as fasHeartbeat,
    faInfo as fasInfo,
    faInfoCircle as fasInfoCircle,
    faLightbulb as fasLightbulb,
    faMagnet as fasMagnet,
    faMapPin as fasMapPin,
    faMousePointer as fasMousePointer,
    faQuestionCircle as fasQuestionCircle,
    faRocket as fasRocket,
    faRoute as fasRoute,
    faScroll as fasScroll,
    faSignal as fasSignal,
    faSignInAlt as fasSignInAlt,
    faSignOutAlt as fasSignOutAlt,
    faSort as fasSort,
    faThermometerHalf as fasThermometerHalf,
    faUserShield as fasUserShield,
    faUserTag as fasUserTag,
    faWater as fasWater,
    faWifi as fasWifi
} from '@fortawesome/free-solid-svg-icons';

// Import brand icons (in alphabetical order)
import {
    faBluetooth as fabBluetooth,
    faBootstrap as fabBootstrap,
    faCanadianMapleLeaf as fabCanadianMapleLeaf,
    faCreativeCommons as fabCreativeCommons,
    faFacebook as fabFacebook,
    faFontAwesome as fabFontAwesome,
    faJs as fabJs,
    faOsi as fabOsi
} from '@fortawesome/free-brands-svg-icons';

// Add icons to library (in alphabetical order)
library.add(
    // Solid
    fasBarcode,
    fasBatteryHalf,
    fasCheck,
    fasCity,
    fasClock,
    fasCloud,
    fasCode,
    fasCog,
    fasExchangeAlt,
    fasExclamationCircle,
    fasExclamationTriangle,
    fasExternalLinkAlt,
    fasEye,
    fasFilter,
    fasHandPointer,
    fasHeartbeat,
    fasInfo,
    fasInfoCircle,
    fasLightbulb,
    fasMagnet,
    fasMapPin,
    fasMousePointer,
    fasQuestionCircle,
    fasRocket,
    fasRoute,
    fasScroll,
    fasSignal,
    fasSignInAlt,
    fasSignOutAlt,
    fasSort,
    fasThermometerHalf,
    fasUserShield,
    fasUserTag,
    fasWater,
    fasWifi,

    // Brands
    fabBluetooth,
    fabBootstrap,
    fabCanadianMapleLeaf,
    fabCreativeCommons,
    fabFacebook,
    fabFontAwesome,
    fabJs,
    fabOsi
);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();