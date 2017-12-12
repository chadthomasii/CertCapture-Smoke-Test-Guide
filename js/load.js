function dynamicallyLoadScript(url)
{
    var script = document.createElement("script"); // Make a script DOM node
    script.type = "text/babel";
    script.src = url; // Set it's src to the provided URL

    document.body.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
dynamicallyLoadScript("js/heading.js");
dynamicallyLoadScript("js/card/card-status.js");
dynamicallyLoadScript("js/card/test-name.js");
dynamicallyLoadScript("js/card/card.js");
dynamicallyLoadScript("js/app.js");
