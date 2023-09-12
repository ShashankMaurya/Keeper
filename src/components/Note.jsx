import react from "react";
import Card from "./Card";
import notes from "../notes"

function Note() {
    return (
        notes.map((note) => <Card key = {note.key} title={note.title} content={note.content} />)
    );
}

export default Note;