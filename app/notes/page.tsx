//In Next 13 all components are server components bt defaukt,
//So we can do data fetching inside them with async/await

import Link from "next/link";
import styles from "./Notes.module.css";
import PocketBase from "pocketbase";
import CreateNote from "./CreateNote";

// export const dynamic = "auto",
//     dynamicParams = true,
//     revalidate = 0,
//     fetchCache = "auto",
//     runtime = "nodejs",
//     preferredRegion = "auto";

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30', {cache: "no-store"});
    const data = await res.json(); //convert results into JSON

    // const db = new PocketBase("http://127.0.0.1:8090");
    // const data = await db.records.getList("posts"); //Doesnt work

    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div>
            <h1>Notes</h1>
            <div className={styles.grid}>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>

            <CreateNote />
        </div>
    );
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};

    return (
        <Link className={styles.note} href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    );
}
