 var picker = new Pikaday(
    {
        field: document.getElementById('inputDate'),
        firstDay: 1,
        format: 'MM/DD/YYYY',
        minDate: new Date(2000, 0, 1),
        maxDate: new Date(2020, 12, 31),
        yearRange: [2000,2020]
    });
