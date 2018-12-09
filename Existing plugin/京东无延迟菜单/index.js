$(document).ready(function () {
    var sub = $('#sub');

    //指向当前激活的行
    var activeRow
    // 与激活的行对应的二级菜单
    var activeMenu

    $('#test')
        .on('mouseenter', function (e) {
            sub.removeClass('none')
        })
        .on('mouseleave', function (e) {
            sub.addClass('none')

            if (activeRow) {
                activeRow.removeClass('active')
                activeRow = null;
            }

            if (activeMenu) {
                activeMenu.addClass('none')
                activeMenu = null;
            }
        })
        .on('mouseenter', 'li' , function (e) {
            if (!activeRow) {
                activeRow = $(e.target).addClass()
                activeMenu = $('#' + activeRow.data('id'))
                activeMenu.removeClass('none')
                return;
            }

            activeRow.removeClass('active')
            activeMenu.addClass('none')
        })
});