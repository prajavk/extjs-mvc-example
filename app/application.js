Ext.define('Crud.Application', {
    name: 'Crud',

    extend: 'Ext.app.Application',

    stores: [
        'Employees'
    ],

    views: [
        'Main'
    ],

    controllers: [
        'Main'
    ]
});
