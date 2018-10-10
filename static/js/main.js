$('#emailModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
  })



$('#nameHeader').on('mouseenter', function(){
    $(this).removeClass('flash');
    $(this).addClass('swing');
})

$('#nameHeader').on('mouseleave', function(){
    $(this).removeClass('swing');
})

$('.social-media-icons').on('mouseenter', function(){
    $(this).addClass('bounce');
})

$('.social-media-icons').on('mouseleave', function(){
    $(this).removeClass('bounce');
})

$('#contact-form').submit(function(e){
    e.preventDefault();
    var email = $('#recipient-name');
    var message = $('#message-text');
    if(email.val().trim() == '' || message.val().trim() == ''){
        alert('Please fill in required fields.');
    }
    else{
        $.ajax({
            url: '//formspree.io/emmaoobo@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            datatype: 'json',
            success: function(){
                alert('MESSAGE SENT!');
                $('#emailModal').modal('toggle');
                email.val('');
                message.val('');
            },
            error: function(e){
                alert('AN ERROR HAS OCCURED! :(')
                console.error(e)
            }
        })
    }
    
})