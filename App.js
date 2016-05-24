Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch: function() {
        console.log('Hello big bad world!!!');
        
        var myStore = Ext.create('Rally.data.wsapi.Store', {
    		model: 'User Story',
    		autoLoad: true,
    		listeners: {
        		load: function(store, data, success) {
            		console.log('Got the data! I did I did!', store, data, success);
            		
            		var myGrid = Ext.create('Rally.ui.grid.Grid', {
            			store: myStore,
            			columnCfgs: [
            				'FormattedID', 'Name', 'ScheduleState'
            			]
            		});
            		
            		this.add(myGrid);
            		
        		},
        		scope: this
    		},
    		
    		fetch: ['Name', 'ScheduleState', 'FormattedID']
		});
    }
});
