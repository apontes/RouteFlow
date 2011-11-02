// View Graph

dojo.declare("route.ViewGraph", [dijit._Widget, dijit._Templated], {
    templatePath: dojo.moduleUrl("ion", "templates/viewGraph.html"),
    templateString: null,
    widgetsInTemplate: true,
    url: '',
    inputId: ''
});

function viewGraph() {

    hideErrorDiv();

    deSelectTab('viewTopology');
    selectTab('viewGraphId');

    document.getElementById("selectedTab").value = "graph";

    dijit.byId("contentDiv").setContent('<div dojoType="route.ViewGraph"></div>');

    graph_init();
}
