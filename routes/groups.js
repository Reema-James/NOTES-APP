import express from "express";
import { createGroup, createNote, getGroups, getNotes, deleteGroup, deleteNote, 
    updateGroup, updateNote, getNotesCount, getGroupName } from "../controller/groups.js"

const router = express.Router();

router.get("/groups", getGroups);
router.post("/group", createGroup);
router.get("/notes:id", getNotes);
router.post("/note:id",createNote);

router.delete( `/groups:id`, deleteGroup);
router.delete( `/notes:id/group:groupId`, deleteNote);

router.put( `/groups:id`, updateGroup);
router.put( `/notes:id`, updateNote);

router.get("/notes-count:id", getNotesCount);
router.get("/group:id", getGroupName);

export default router;