const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return this.type + this.price + this.brand;
    }

    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }

    getDoorsCount() {
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }
}

const cars = [];
const bikes = [];

data.forEach((item) => {
    const type = item.type;
    const price = item.price;
    const brand = item.brand;
    const doors = item.doors;
    const maxSpeed = item.maxSpeed;

    if (type === 'car') {
        cars.push({ type, price, brand, doors });
        const car = new Car(type, price, brand, doors);
    } else if (type === 'bike') {
        bikes.push({ type, price, brand, maxSpeed });
        const bike = new Bike(type, price, brand, maxSpeed);
    }
});

function showInfo(dataArray, containerName) {
    const container = document.getElementById(containerName);
    dataArray.forEach((arr) => {
        const h2 = document.createElement('h2');
        h2.classList = 'title';
        h2.textContent = arr.brand;
        const paragraph = document.createElement('p');
        paragraph.classList = 'info';
        if (dataArray === cars) {
            paragraph.textContent = `Стоимость: ${arr.price}, количество дверей: ${arr.doors}`;
        } else if (dataArray === bikes) {
            paragraph.textContent = `Стоимость: ${arr.price}, максимальная скорость: ${arr.maxSpeed} км/ч`;
        }

        container.append(h2);
        container.append(paragraph);
    })
}

showInfo(cars, 'container__cars');
showInfo(bikes, 'container__bikes');