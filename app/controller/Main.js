Ext.define('Crud.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: ['Employees'],
    models: ['Employee'],
    views: ['Main'],

    refs:[
        {
            ref: 'main',
            selector: 'main'
        },
        {
            ref: 'editableGrid',
            selector: 'main > gridpanel[name=editableGrid]'
        }
    ],

    init: function () {

        // Set up control
        this.control({
            'main > gridpanel[name=editableGrid]' : {

                selectionchange: function(current, selections) {
                    this.getEditableGrid().down('button[action=remove]').setDisabled(selections.length == 0);
                }
            },
            'main > gridpanel > toolbar > button[action=add]' : {

                click: function(button) {

                    var rowEditing = this.getEditableGrid().getPlugin('rowediting');
                    rowEditing.cancelEdit();
                    
                    var newEmployee = Ext.create('Crud.model.Employee', {
                        name: 'New Guy',
                        email: 'new@sencha-test.com',
                        start: new Date(),
                        salary: 50000
                    });

                    this.getEmployeesStore().insert(0, newEmployee);
                    rowEditing.startEdit(0, 0);
                }
            },
            'main > gridpanel > toolbar > button[action=remove]' : {

                click: function(button) {

                    var rowEditing = this.getEditableGrid().getPlugin('rowediting');
                    var selection = this.getEditableGrid().getSelectionModel();
                    rowEditing.cancelEdit();
                    this.getEmployeesStore().remove(selection.getSelection());
                    selection.select(0);
                }
            }
        });
    },

    onLaunch: function(application) {

        // Show the window
        Ext.create('Ext.window.Window', {
            title: 'Employees',
            height: 600,
            width: 800,
            closable: false,
            layout: 'fit',
            items: {
                xtype: 'main'
            }
        }).show();
    }
});