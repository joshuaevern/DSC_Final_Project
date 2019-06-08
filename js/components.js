"use strict"

/**
 * createEventCard
 * @param title - title of event
 * @param description - descriptioin of event
 * @param date - data of event
 * @param time - time of event
 * @param loc - venue of event
 * @param link - optional link for registration
 
 */

 function createEventcard(title, description, date, time, loc, link="") {
    card = document.createElement("li");
    container = document.createElement("div");
    ttl =  document.createElement("h1");
    desc = document.createElement("p");
    dtlContainer = document.createElement("div");
    dte = document.createElement("span");
    tme = document.createElement("span");
    venue = document.createElement("span");
    btn =  document.createElement("a");

    dtlContainer.appendChild(dte);
    dtlContainer.appendChild(tme);
    dtlContainer.appendChild(venue);
    container.appendChild(ttl);
    container.appendChild(desc);
    container.appendChild(dtlContainer);
    container.appendChild(btn);
    card.appendChild(container);
    return card;
 }

 /**
 * createProductCard
 * @param title - title of event
 * @param description - descriptioin of event
 * @param img - product image
 * @param link - optional link for registration
 */

function createProductcard(title, description, img, link="") {
    card = document.createElement("li");
    container = document.createElement("div");
    descontainer = document.createElement("div");
    shortdecs = document.createElement("div");

    image = document.createElement("img");
    ttl =  document.createElement("h1");
    desc = document.createElement("p");

    
    container.appendChild(descontainer);
    container.appendChild(shortdesc);
    card.appendChild(container);
    return card;
 }
