import { startWidget } from "./modules/widgetServis.js";

const initWidget = async (app) => {

    const widget = await startWidget()
    app.append(widget);
    
}

initWidget(document.getElementById('app'));

