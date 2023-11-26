const ampharos = {
  id: "dp3-1",
  name: "Ampharos",
  supertype: "Pokémon",
  subtypes: ["Stage 2"],
  level: "52",
  hp: "130",
  types: ["Lightning"],
  evolvesFrom: "Flaaffy",
  abilities: [
    {
      name: "Jamming",
      text: "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
      type: "Poké-Body",
    },
  ],
  attacks: [
    {
      name: "Cluster Bolt",
      cost: ["Lightning", "Colorless", "Colorless"],
      convertedEnergyCost: 3,
      damage: "70",
      text: "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+30",
    },
  ],
  resistances: [
    {
      type: "Metal",
      value: "-20",
    },
  ],
  retreatCost: ["Colorless", "Colorless", "Colorless"],
  convertedRetreatCost: 3,
  set: {
    id: "dp3",
    name: "Secret Wonders",
    series: "Diamond & Pearl",
    printedTotal: 132,
    total: 132,
    legalities: {
      unlimited: "Legal",
    },
    ptcgoCode: "SW",
    releaseDate: "2007/11/01",
    updatedAt: "2018/03/04 10:35:00",
    images: {
      symbol: "https://images.pokemontcg.io/dp3/symbol.png",
      logo: "https://images.pokemontcg.io/dp3/logo.png",
    },
  },
  number: "1",
  artist: "Kouki Saitou",
  rarity: "Rare Holo",
  flavorText:
    "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
  nationalPokedexNumbers: [181],
  legalities: {
    unlimited: "Legal",
  },
  images: {
    small: "https://images.pokemontcg.io/dp3/1.png",
    large: "https://images.pokemontcg.io/dp3/1_hires.png",
  },
  tcgplayer: {
    url: "https://prices.pokemontcg.io/tcgplayer/dp3-1",
    updatedAt: "2023/11/24",
    prices: {
      holofoil: {
        low: 5.2,
        mid: 6.28,
        high: 29.98,
        market: 13.7,
        directLow: null,
      },
      reverseHolofoil: {
        low: 4.25,
        mid: 5.2,
        high: 19.99,
        market: 4.26,
        directLow: 3.7,
      },
    },
  },
  cardmarket: {
    url: "https://prices.pokemontcg.io/cardmarket/dp3-1",
    updatedAt: "2023/11/24",
    prices: {
      averageSellPrice: 1.43,
      lowPrice: 0.05,
      trendPrice: 1.2,
      germanProLow: 0,
      suggestedPrice: 0,
      reverseHoloSell: 2.25,
      reverseHoloLow: 0.49,
      reverseHoloTrend: 2.62,
      lowPriceExPlus: 0.49,
      avg1: 3.5,
      avg7: 1.65,
      avg30: 1.87,
      reverseHoloAvg1: 4.99,
      reverseHoloAvg7: 1.94,
      reverseHoloAvg30: 2.71,
    },
  },
}

describe("App Test", () => {
  it("Visits the app", () => {
    cy.visit("http://localhost:5173/")
    // Vous pouvez ajouter d'autres commandes Cypress ici pour interagir avec votre application
  })
})

describe("Data Fetching Test", () => {
  it("fetches data and displays it in a list", () => {
    // Intercepter la requête GET et y répondre avec un mock
    cy.intercept("GET", "/api/all?limit=1&offset=1", {
      statusCode: 200,
      body: {
        data: [
          {
            id: "dp3-1",
            name: "Ampharos",
            supertype: "Pokémon",
            subtypes: ["Stage 2"],
            level: "52",
            hp: "130",
            types: ["Lightning"],
            evolvesFrom: "Flaaffy",
            abilities: [
              {
                name: "Jamming",
                text: "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
                type: "Poké-Body",
              },
            ],
            attacks: [
              {
                name: "Cluster Bolt",
                cost: ["Lightning", "Colorless", "Colorless"],
                convertedEnergyCost: 3,
                damage: "70",
                text: "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
              },
            ],
            weaknesses: [
              {
                type: "Fighting",
                value: "+30",
              },
            ],
            resistances: [
              {
                type: "Metal",
                value: "-20",
              },
            ],
            retreatCost: ["Colorless", "Colorless", "Colorless"],
            convertedRetreatCost: 3,
            set: {
              id: "dp3",
              name: "Secret Wonders",
              series: "Diamond & Pearl",
              printedTotal: 132,
              total: 132,
              legalities: {
                unlimited: "Legal",
              },
              ptcgoCode: "SW",
              releaseDate: "2007/11/01",
              updatedAt: "2018/03/04 10:35:00",
              images: {
                symbol: "https://images.pokemontcg.io/dp3/symbol.png",
                logo: "https://images.pokemontcg.io/dp3/logo.png",
              },
            },
            number: "1",
            artist: "Kouki Saitou",
            rarity: "Rare Holo",
            flavorText:
              "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
            nationalPokedexNumbers: [181],
            legalities: {
              unlimited: "Legal",
            },
            images: {
              small: "https://images.pokemontcg.io/dp3/1.png",
              large: "https://images.pokemontcg.io/dp3/1_hires.png",
            },
            tcgplayer: {
              url: "https://prices.pokemontcg.io/tcgplayer/dp3-1",
              updatedAt: "2023/11/24",
              prices: {
                holofoil: {
                  low: 5.2,
                  mid: 6.28,
                  high: 29.98,
                  market: 13.7,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 4.25,
                  mid: 5.2,
                  high: 19.99,
                  market: 4.26,
                  directLow: 3.7,
                },
              },
            },
            cardmarket: {
              url: "https://prices.pokemontcg.io/cardmarket/dp3-1",
              updatedAt: "2023/11/24",
              prices: {
                averageSellPrice: 1.43,
                lowPrice: 0.05,
                trendPrice: 1.2,
                germanProLow: 0,
                suggestedPrice: 0,
                reverseHoloSell: 2.25,
                reverseHoloLow: 0.49,
                reverseHoloTrend: 2.62,
                lowPriceExPlus: 0.49,
                avg1: 3.5,
                avg7: 1.65,
                avg30: 1.87,
                reverseHoloAvg1: 4.99,
                reverseHoloAvg7: 1.94,
                reverseHoloAvg30: 2.71,
              },
            },
          },
        ],
      }, // Mock des données
    }).as("getData")

    // Visiter la page qui déclenche la requête
    cy.visit("http://localhost:5173/")

    // Déclencher l'action qui envoie la requête GET
    //     cy.get("button#fetch-data").click()

    //     // Attendre la réponse de la requête mockée
    //     cy.wait("@getData")

    //     // Vérifier que les données sont affichées correctement
    //     cy.get("ul#data-list").should("exist")
    //     cy.get("ul#data-list li").should("have.length", 3)
  })
})

describe("Add Item Test", () => {
  it("adds an item to the store on button click", () => {
    // Visitez la page où se trouve le bouton
    cy.visit("http://localhost:5173/")

    // Cliquez sur le bouton qui déclenche l'ajout de l'item
    cy.get("button#add-cart-Ampharos").click()

    // Vous pouvez maintenant vérifier si l'action Redux a été déclenchée
    // Cela nécessite une configuration supplémentaire pour accéder au store Redux depuis Cypress
    // Par exemple, en exposant le store à la fenêtre lors de l'exécution des tests
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.include", {
        // Ici, spécifiez l'état attendu dans le store après le clic sur le bouton
        pokemonsReducer: {
          pokemonsInCart: [
            ampharos
          ],
        },
      })
  })
})
