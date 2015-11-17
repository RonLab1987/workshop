/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('document').ready( function (){
        $('#cl_phone').inputmask("+7(999)999-99-99");
        $('#ord_date_start').inputmask("dd.mm.yyyy",{"placeholder": "дд.мм.гггг"} );
        //$('#ord_date_start').datepicker({ showButtonPanel: true });
        var date = new Date();
        $('#ord_date_start').val(date.toLocaleDateString());
                
        console.log("ready");
    }
);