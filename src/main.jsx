import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as Sentry from "@sentry/react";

Sentry.init({
	dsn: "https://9d01fff6ba912e7815ebe2597948bff3@o4507753503522816.ingest.us.sentry.io/4507753518858240",
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect: React.useEffect,
		}),
		Sentry.replayIntegration(),
	],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
