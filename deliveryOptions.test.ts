import { getDeliveryOptions } from "./deliveryOptions";

describe("getDeliveryOptions", () => {
  test("returns all delivery options for a single product", () => {


    // test commit

    const deliveryOptions = [
      {
        productName: "Product 1",
        deliveryOptions: [
          {
            name: "Delivery Option 1",
            timeSlot: { from: "10:00", to: "12:00" },
            price: 20,
          },
          {
            name: "Delivery Option 2",
            timeSlot: { from: "12:00", to: "13:00" },
            price: 50,
          },
        ],
      },
    ];

    const expected = [
      {
        name: "Delivery Option 1",
        timeSlot: { from: "10:00", to: "12:00" },
        price: 20,
      },
      {
        name: "Delivery Option 2",
        timeSlot: { from: "12:00", to: "13:00" },
        price: 50,
      },
    ];

    expect(getDeliveryOptions(deliveryOptions)).toEqual(expected);
  });

  test("returns the first matching delivery option for multiple products with matching timeslots", () => {
    const deliveryOptions = [
      {
        productName: "Product 1",
        deliveryOptions: [
          {
            name: "Delivery Option 1",
            timeSlot: { from: "10:00", to: "12:00" },
            price: 20,
          },
          {
            name: "Delivery Option 2",
            timeSlot: { from: "12:00", to: "13:00" },
            price: 30,
          },
        ],
      },
      {
        productName: "Product 2",
        deliveryOptions: [
          {
            name: "Delivery Option 3",
            timeSlot: { from: "10:00", to: "12:00" },
            price: 20,
          },
          {
            name: "Delivery Option 4",
            timeSlot: { from: "12:00", to: "13:00" },
            price: 30,
          },
        ],
      },
    ];

    const expected = [
      {
        name: "Delivery Option 1",
        timeSlot: { from: "10:00", to: "12:00" },
        price: 20,
      },
      {
        name: "Delivery Option 2",
        timeSlot: { from: "12:00", to: "13:00" },
        price: 30,
      },
    ];

    expect(getDeliveryOptions(deliveryOptions)).toEqual(expected);
  });

  test("returns the highest priced delivery options for multiple products with matching timeslots", () => {
    const deliveryOptions = [
      {
        productName: "Product 1",
        deliveryOptions: [
          {
            name: "Delivery Option 1",
            timeSlot: { from: "10:00", to: "12:00" },
            price: 20,
          },
          {
            name: "Delivery Option 2",
            timeSlot: { from: "12:00", to: "13:00" },
            price: 30,
          },
        ],
      },
      {
        productName: "Product 2",
        deliveryOptions: [
          {
            name: "Delivery Option 3",
            timeSlot: { from: "10:00", to: "12:00" },
            price: 50,
          },
          {
            name: "Delivery Option 4",
            timeSlot: { from: "12:00", to: "13:00" },
            price: 30,
          },
        ],
      },
    ];

    const expected = [
      {
        name: "Delivery Option 3",
        timeSlot: { from: "10:00", to: "12:00" },
        price: 50,
      },
      {
        name: "Delivery Option 2",
        timeSlot: { from: "12:00", to: "13:00" },
        price: 30,
      },
    ];

    expect(getDeliveryOptions(deliveryOptions)).toEqual(expected);
  });

  test("returns the highest priced delivery options for multiple products with matching timeslots only", () => {
    const deliveryOptions = [
      {
        productName: "Product 1",
        deliveryOptions: [
          {
            name: "Delivery Option 1",
            timeSlot: { from: "10:00", to: "12:00" },
            price: 20,
          },
          {
            name: "Delivery Option 2",
            timeSlot: { from: "12:00", to: "13:00" },
            price: 30,
          },
        ],
      },
      {
        productName: "Product 2",
        deliveryOptions: [
          {
            name: "Delivery Option 3",
            timeSlot: { from: "10:00", to: "12:00" },
            price: 50,
          },
          {
            name: "Delivery Option 4",
            timeSlot: { from: "12:00", to: "13:00" },
            price: 30,
          },
          {
            name: "Delivery Option 5",
            timeSlot: { from: "14:00", to: "15:00" },
            price: 30,
          },
        ],
      },
    ];

    const expected = [
      {
        name: "Delivery Option 3",
        timeSlot: { from: "10:00", to: "12:00" },
        price: 50,
      },
      {
        name: "Delivery Option 2",
        timeSlot: { from: "12:00", to: "13:00" },
        price: 30,
      },
    ];

    expect(getDeliveryOptions(deliveryOptions)).toEqual(expected);
  });
});
