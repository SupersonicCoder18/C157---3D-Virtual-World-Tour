AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEL = this.createBorder(position, item.id)
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEL.appendChild(thumbnail)
      // Title Text Element
      const titleEL = this.createTitle(position, item)
      borderEL.appendChild(titleEL)
      this.placesContainer.appendChild(borderEL);
    }
  },
  
  createBorder: function(position, id){
    const entityEL = document.createElement("a-entity");
    entityEL.setAttribute("id", id)
    entityEL.setAttribute("visible", true)
    entityEL.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10
    })
    entityEL.setAttribute("position", position)
    entityEL.setAttribute("material", {
      color: "#00bcd4",
      opacity: 0.4
    })
    return entityEL
  },

  createThumbnail: function(item){
    const entityEL = document.createElement("a-entity");
    entityEL.setAttribute("visible", true)
    entityEL.setAttribute("geometry", {
      primitive: "circle",
      radius: 9
    })
    entityEL.setAttribute("material", {
      src: item.url
    })
    return entityEL
  },

  createTitle: function(position, item){
    const entityEL = document.createElement("a-entity");
    entityEL.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 60,
      color: "#e65100",
      value: item.title
    })
    const elPosition = position;
    elPosition.y = -20
    entityEL.setAttribute("position", elPosition)
    entityEL.setAttribute("visible", true)
    return entityEL
  }

});