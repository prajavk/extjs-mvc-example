Ext.define('Crud.model.Employee', {
    extend: 'Ext.data.Model',
    fields: [
        'name',
        'email',
        { name: 'start', type: 'date', dateFormat: 'n/j/Y' },
        { name: 'salary', type: 'float' }
    ]
});