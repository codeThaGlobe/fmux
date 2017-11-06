/*
Submit the form
*/
$('.btn').click(function() { //next btn
    $("#funding-application").submit();
});

/*
Calendar widget on start date field
*/
$('#datetimepicker1').datetimepicker({
    icons: { //font awesome
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down"
    },
    format: 'MM-DD-YYYY',
    useCurrent: true, //use the current dateteim as default selected date on open
    maxDate: moment().format('MM DD YYYY') //Disable selection of dates past today
});

/*
Validate the form fields
- They are being validated on keystroke and submitn
*/

$('#funding-application').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            start_date: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter a valid date more than 6 months ago'
                    }
                }
            },
            month_1: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter a valid amount'
                    },
                    digits: {
                        message: 'Sorry Charlie! Numbers only'
                    },
                }
            },
            month_2: {
                validators: {
                    notEmpty: {
                        message: 'This has to be at least 10% more than the previous month.'
                    },
                    digits: {
                        message: 'Yup numbers only in this one too.'
                    },
                }
            },
            month_3: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'This has to be at least 10% more than the previous month.'
                    },
                    digits: {
                        message: 'Numbers, numbers, numbers only'
                    },
                }
            },
            month_4: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'This has to be at least 10% more than the previous month.'
                    },
                    digits: {
                        message: 'You know, numbers like 1,2,3,4...'
                    },
                }
            },
            month_5: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'This has to be at least 10% more than the previous month.'
                    },
                    digits: {
                        message: 'Thats not a number :-)'
                    },
                }
            },
            month_6: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'This has to be at least 10% more than the previous month.'
                    },
                    digits: {
                        message: 'Here is a hint. If you try it with letters, it wont work!.'
                    },
                }
            },
            month_7: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'This has to be at least 10% more than the previous month.'
                    },
                    digits: {
                        message: 'Here is a hint. If you try it with letters, it wont work!.'
                    },
                }
            },

        },
        month_8: {
            validators: {
                stringLength: {
                    min: 2,
                },
                notEmpty: {
                    message: 'This has to be at least 10% more than the previous month.'
                },
                digits: {
                    message: 'Here is a hint. If you try it with letters, it wont work!.'
                },
            }
        },

        month_9: {
            validators: {
                stringLength: {
                    min: 2,
                },
                notEmpty: {
                    message: 'This has to be at least 10% more than the previous month.'
                },
                digits: {
                    message: 'Here is a hint. If you try it with letters, it wont work!.'
                },
            }
        },

        month_10: {
            validators: {
                stringLength: {
                    min: 2,
                },
                notEmpty: {
                    message: 'This has to be at least 10% more than the previous month.'
                },
                digits: {
                    message: 'Here is a hint. If you try it with letters, it wont work!.'
                },
            }
        },

        month_11: {
            validators: {
                stringLength: {
                    min: 2,
                },
                notEmpty: {
                    message: 'This has to be at least 10% more than the previous month.'
                },
                digits: {
                    message: 'Here is a hint. If you try it with letters, it wont work!.'
                },
            }
        },

        month_12: {
            validators: {
                stringLength: {
                    min: 2,
                },
                notEmpty: {
                    message: 'This has to be at least 10% more than the previous month.'
                },
                digits: {
                    message: 'Here is a hint. If you try it with letters, it wont work!.'
                },
            }
        },

    });