import { startWidget } from "./modules/widgetServis.js";

const initWidget = (app) => {

    const widget = startWidget();
    app.append(widget);

}

const app = document.getElementById('app')

initWidget(app);

