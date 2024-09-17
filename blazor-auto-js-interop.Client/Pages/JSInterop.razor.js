window.applyCepMask = function (inputElement) {
    inputElement.addEventListener('input', function () {
        let value = inputElement.value.replace(/\D/g, '');
        let mask = '_____-___'; // 99999-999
        
        for (let i = 0; i < value.length; i++) {
            mask = mask.replace('_', value[i]);
        }
        
        inputElement.value = mask;

        const increments = [
            { max: 5, increment: 0 },
            { max: Infinity, increment: 1 }
        ];

        const increment = increments.find(({ max }) => value.length <= max).increment;
        inputElement.setSelectionRange(value.length + increment, value.length + increment);
    });
};

window.applyCpfMask = function (inputElement) {
    inputElement.addEventListener('input', function () {
        let value = inputElement.value.replace(/\D/g, '');
        let mask = '___.___.___-__'; // 999.999.999-99
        
        for (let i = 0; i < value.length; i++) {
            mask = mask.replace('_', value[i]);
        }
        
        inputElement.value = mask;

        const increments = [
            { max: 3, increment: 0 },
            { max: 6, increment: 1 },
            { max: 9, increment: 2 },
            { max: Infinity, increment: 3 }
        ];

        const increment = increments.find(({ max }) => value.length <= max).increment;
        inputElement.setSelectionRange(value.length + increment, value.length + increment);
    });
};

window.applyCnpjMask = function (inputElement) {
    inputElement.addEventListener('input', function () {
        let value = inputElement.value.replace(/\D/g, '');
        let mask = '__.___.___/____-__'; // 99.999.999/9999-99
        
        for (let i = 0; i < value.length; i++) {
            mask = mask.replace('_', value[i]);
        }
        
        inputElement.value = mask;

        const increments = [
            { max: 2, increment: 0 },
            { max: 5, increment: 1 },
            { max: 8, increment: 2 },
            { max: 12, increment: 3 },
            { max: Infinity, increment: 4 }
        ];

        const increment = increments.find(({ max }) => value.length <= max).increment;
        inputElement.setSelectionRange(value.length + increment, value.length + increment);
    });
};

window.applyCnpjAlfanumericoMask = function (inputElement) {
    inputElement.addEventListener('input', function () {
        let value = inputElement.value.replace(/[^a-zA-Z0-9]/g, '');
        let valueCheck = '';
        let mask = '__.___.___/____-__'; // AA.AAA.AAA/AAAA-99
        
        for (let i = 0; i < value.length; i++) {
            if ((i < 12 && /[a-zA-Z0-9]/.test(value[i])) || (i >= 12 && /[0-9]/.test(value[i]))) {
                valueCheck += value[i];
            }
        }
        
        for (let i = 0; i < valueCheck.length; i++) {
            mask = mask.replace('_', valueCheck[i].toUpperCase());
        }

        inputElement.value = mask;

        const increments = [
            { max: 2, increment: 0 },
            { max: 5, increment: 1 },
            { max: 8, increment: 2 },
            { max: 12, increment: 3 },
            { max: Infinity, increment: 4 }
        ];

        const increment = increments.find(({ max }) => valueCheck.length <= max).increment;
        inputElement.setSelectionRange(valueCheck.length + increment, valueCheck.length + increment);
    });
};

window.applyTelefoneMask = function (inputElement) {
    inputElement.addEventListener('input', function () {
        let value = inputElement.value.replace(/\D/g, '');
        let mask = '(__) ____-____'; // (99) 9999-9999
        
        for (let i = 0; i < value.length; i++) {
            mask = mask.replace('_', value[i]);
        }

        inputElement.value = mask;

        const increments = [
            { max: 2, increment: 1 },
            { max: 6, increment: 3 },
            { max: Infinity, increment: 4 }
        ];

        const increment = increments.find(({ max }) => value.length <= max).increment;
        inputElement.setSelectionRange(value.length + increment, value.length + increment);
    });
};

window.applyCelularMask = function (inputElement) {
    inputElement.addEventListener('input', function () {
        let value = inputElement.value.replace(/\D/g, '');
        let mask = '(__) _____-____'; // (99) 99999-9999
        
        for (let i = 0; i < value.length; i++) {
            mask = mask.replace('_', value[i]);
        }

        inputElement.value = mask;

        const increments = [
            { max: 2, increment: 1 },
            { max: 7, increment: 3 },
            { max: Infinity, increment: 4 }
        ];

        const increment = increments.find(({ max }) => value.length <= max).increment;
        inputElement.setSelectionRange(value.length + increment, value.length + increment);
    });
};

window.applyPlacaMask = function (inputElement) {
    inputElement.addEventListener('input', function () {
        let value = inputElement.value.replace(/[^a-zA-Z0-9]/g, '');
        let valueCheck = '';
        let mask = '___-____'; // LLL–9999
        
        for (let i = 0; i < value.length; i++) {
            if ((i < 3 && /[a-zA-Z]/.test(value[i])) || (i >= 3 && /[0-9]/.test(value[i]))) {
                valueCheck += value[i];
            }
        }

        for (let i = 0; i < valueCheck.length; i++) {
            mask = mask.replace('_', valueCheck[i].toUpperCase());
        }

        inputElement.value = mask;

        const increments = [
            { max: 3, increment: 0 },
            { max: Infinity, increment: 1 }
        ];

        const increment = increments.find(({ max }) => valueCheck.length <= max).increment;
        inputElement.setSelectionRange(valueCheck.length + increment, valueCheck.length + increment);
    });
};

window.applyPlacaMercosulMask = function (inputElement) {
    inputElement.addEventListener('input', function () {
        let value = inputElement.value.replace(/[^a-zA-Z0-9]/g, '');
        let valueCheck = '';
        let mask = '_______'; // LLL9L99

        for (let i = 0; i < value.length; i++) {
            if ((i < 3 && /[a-zA-Z]/.test(value[i])) || (i == 3 && /[0-9]/.test(value[i])) || (i == 4 && /[a-zA-Z]/.test(value[i])) || (i >= 5 && /[0-9]/.test(value[i]))) {
                valueCheck += value[i];
            }
        }

        for (let i = 0; i < valueCheck.length; i++) {
            mask = mask.replace('_', valueCheck[i].toUpperCase());
        }

        inputElement.value = mask;
        inputElement.setSelectionRange(valueCheck.length, valueCheck.length);
    });
};

window.applyValorMonetarioMask = function(inputElement) {
    inputElement.addEventListener('input', function () {
        let value = inputElement.value.replace(/\D/g, '');

        value = (value / 100).toFixed(2).replace('.', ',');

        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        inputElement.value = value;
    });
};
