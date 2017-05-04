$(function() {

    var model = {
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };


    var octopus = {
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr +'<p class="note-date">' + formatDate(new Date()) + '</p>'
            });
            view.render();
        },

        getNotes: function() {
            return model.getAllNotes();
        },

        init: function() {
            model.init();
            view.init();
        }
    };

    function formatDate(date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hours + 'h' + minutes + 'mn' + seconds + 's';
    }

    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e) {
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function() {
            var htmlStr = '';
            octopus.getNotes().forEach(function(note) {
                htmlStr += '<li class="note">' + note.content + '</li>'; //+ '<ul>' + formatDate(new Date()) + '</ul>' + formatDate(new Date());
            });
            this.noteList.html(htmlStr);
        }
    };

    octopus.init();
});
