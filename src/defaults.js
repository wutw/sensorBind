export default {

    selectDefalut: {
        // Defines the initial value of province.
        manufacturer: '—— 选择厂商 ——',

        // Defines the initial value of city.
        sensor: '—— 选择传感器类型 ——',

        // Defines the initial value of district.
        model: '—— 选择传感器型号 ——',
        type: '--请选择数据类型--',
    },

    // Show placeholder.
    placeholder: true,
    hasUuid: null,//新增为null，修改有uuid为true，无uuid为false

    uuidDIv: '.uuidItem',//uuid的div
    companyClass: '.companySelect',
    rtuClass: '.RtuSelect',
    tunnelDiv: '.tunnelInput',

    lackUuidParameter:'.parameter',
    parameterHasUuid: '.hasUuid',//有uuid的数据类型及DIV
    parameterLackUuid: '.lackUuid',


    /*rtuUrl: './rtu.json',
    tunnelUrl: './tunnel.json'*/

};
