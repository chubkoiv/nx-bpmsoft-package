define("K2AngularModule", ["LookupUtilities", "K2AngularComponent"], function (LookupUtilities) {
	Ext.define("BPMSoft.configuration.K2AngularModule", {
		alternateClassName: "BPMSoft.K2AngularModule",
		extend: "BPMSoft.BaseModule",
		Ext: null,
		sandbox: null,
		BPMSoft: null,
		viewModel: null,
		view: null,
		ngComponent: null,
		ngValue: null,
		messages: {},

		/**
		 * @inheritDoc BPMSoft.BaseViewModule#init
		 * @overridden
		 */
		init: function() {
			this.sandbox.registerMessages(this.messages);
		},

		/**
		 * @inheritDoc BPMSoft.BaseViewModule#render
		 * @overridden
		 */
		render: function(renderTo) {
			const ngComponent = document.createElement("ng-angular");
			ngComponent.setAttribute("id", this.sandbox.id);
			this.ngComponent = ngComponent;
			this.initNgComponentAttributes();
			this.initNgComponentEvents();
			renderTo.appendChild(ngComponent);
		},

		/**
		 * initialize component config
		 */
		initNgComponentAttributes: function() {
			const ngComponent = this.ngComponent;
			// if (ngComponent && this.ngValue) {
			// 	ngComponent.schemaId = this.ngValue.NgFilterSchemaId;
			// }
		},

		/**
		 * initialize component events
		 */
		initNgComponentEvents: function() {
			const ngComponent = this.ngComponent;
			if (ngComponent) {
				// ngComponent.addEventListener("FilterChanged", this.onFilterChanged.bind(this));
				// ngComponent.addEventListener("ViewChanged", this.onViewChanged.bind(this));
				// ngComponent.addEventListener("OpenLookupModalbox", this.onOpenLookupModalbox.bind(this));
			}
		},

		/**
		 * @inheritDoc BPMSoft.core.BaseViewModule#onDestroy
		 * @overridden
		 */
		destroy: function() {
			this.ngComponent = null;
		}
	});
	return BPMSoft.K2AngularModule;
});
