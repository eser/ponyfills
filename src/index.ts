import arrayFrom, { arrayFromPolyfill } from './arrayFrom';
import objectAssign, { objectAssignPolyfill } from './objectAssign';
import objectEntries, { objectEntriesPolyfill } from './objectEntries';
import objectValues, { objectValuesPolyfill } from './objectValues';
import reflectOwnKeys, { reflectOwnKeysPolyfill } from './reflectOwnKeys';

const library = {
    arrayFrom,
    arrayFromPolyfill,
    objectAssign,
    objectAssignPolyfill,
    objectEntries,
    objectEntriesPolyfill,
    objectValues,
    objectValuesPolyfill,
    reflectOwnKeys,
    reflectOwnKeysPolyfill,
};

export {
    library as default,
    arrayFrom,
    arrayFromPolyfill,
    objectAssign,
    objectAssignPolyfill,
    objectEntries,
    objectEntriesPolyfill,
    objectValues,
    objectValuesPolyfill,
    reflectOwnKeys,
    reflectOwnKeysPolyfill,
};
