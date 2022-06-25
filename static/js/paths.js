import { data } from "./data.js";

export const doItForMe = (index) => `
    <h2 class="fs-700 uppercase ff-serif">${data.destinations[index].name}</h2>
    <p>${data.destinations[index].description}</p>
    <div class="destination-meta flex">
        <div>
        <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
        <p class="ff-serif uppercase">${data.destinations[index].distance}</p>
        </div>
        <div>
        <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
        <p class="ff-serif uppercase">${data.destinations[index].travel}</p>
        </div>
    </div>
`;
