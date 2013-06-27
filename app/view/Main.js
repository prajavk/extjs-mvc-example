Ext.define('Crud.view.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.main',

    layout: 'fit',

    items:[
        {
            xtype: 'grid',
            store: 'Employees',
            name: 'editableGrid',
            columns: [{
                header: 'Name',
                dataIndex: 'name',
                flex: 2,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }
            }, {
                header: 'Email',
                dataIndex: 'email',
                flex: 2,
                editor: {
                    allowBlank: false,
                    vtype: 'email'
                }
            }, {
                xtype: 'datecolumn',
                header: 'Start Date',
                dataIndex: 'start',
                flex: 1,
                field: {
                    xtype: 'datefield',
                    allowBlank: false,
                    format: 'm/d/Y',
                    minValue: '01/01/2006',
                    minText: 'Cannot have a start date before the company existed!',
                    maxValue: Ext.Date.format(new Date(), 'm/d/Y')
                }
            }, {
                xtype: 'numbercolumn',
                header: 'Salary',
                dataIndex: 'salary',
                format: '$0,0',
                flex: 1,
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 1,
                    maxValue: 150000
                }
            }],
            columnLines: true,
            selModel: 'rowmodel',
            plugins: [
                Ext.create('Ext.grid.plugin.RowEditing', {
                    clicksToEdit: 2,
                    autoCancel: false,
                    pluginId: 'rowediting'
                })
            ],
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    action: 'add',
                    text:'Add'
                },'-',{
                    action: 'remove',
                    text:'Remove',
                    disabled: true
                }]
            }],

            width: 600,
            height: 300
        }
    ]
});