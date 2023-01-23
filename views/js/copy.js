

$(document).on("click", ".copiar", function(){
    let $container = $(this).closest(".div");
    let copiarText = $container.find('.usercopy').text();
    let clipboard = new ClipboardJS('.copiar', {
        text: function() {
            return copiarText;
        }
    });
    clipboard.on('success', function(e) {
        $container.find('.copied-text').addClass("show");
        setTimeout(() => {
            $container.find('.copied-text').removeClass("show");
        }, 3000);
    });
    clipboard.on('error', function(e) {
        console.error('Error al copiar!');
    });
});
