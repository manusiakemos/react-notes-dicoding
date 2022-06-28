import ButtonArchive from "./ui/ButtonArchive";
import ButtonDelete from "./ui/ButtonDelete";
import { showFormattedDate } from "../utils/data";

function NoteItem({ id, title, body, archived, onDelete, createdAt, onArchive }) {
  return (
    <div className="noteItem" id={id}>
      <h4 className="noteItemTitle">{title}</h4>
      <div className="noteItemDate">{showFormattedDate(createdAt)}</div>
      <div className="noteItemBody">{body}</div>
      <div className="action">
        <ButtonDelete id={id} onArchive={onArchive}onDelete={onDelete}/>
        <ButtonArchive id={id} archived={archived} onArchive={onArchive}/>
      </div>
    </div>
  );
}

export default NoteItem;
