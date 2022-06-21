import {v4 as uuid} from "uuid";

let groups = [];
let notes =[];
let favourites=[];
let map = new Map();

export const getGroups = (req,res) =>{
    res.send(groups);
};

export const createGroup = (req,res) => {
    const group = req.body;
    groups.push({...group, id: uuid(), count: 0});
    res.send("Response added Sucessfully");
};

export const getNotes = (req,res) => {
    let id = String(req.params.id).slice(1);
    if(map.has(id)){
        res.send(map.get(id));
    }
    res.send([]);
};

export const getNotesCount = (req,res) => {
    let id = String(req.params.id).slice(1);
    if(map.has(id)){
        res.send(map.get(id).length);
    }
    res.send(0);
};

export const createNote = (req,res) => {
    let groupId = String(req.params.id).slice(1);
    const note = req.body;
    const id = uuid();
    const newNote = {...note, id, groupId, favourite:false};
    for (let i = 0; i < groups.length; i++) {
        let group = groups[i];
        if (group.id === groupId) {
           group.count = group.count + 1; 
        }
        groups[i] = group;
    }
    if (map.has(groupId)) {
        map.get(groupId).push(newNote);
    } else {
        const newNoteList=[newNote];
        map.set(groupId, newNoteList);
    }
    res.send("Response added Successfully");
};

      
export const deleteGroup=(req,res)=>{
    let groupId = String(req.params.id).slice(1);
    for (let i = 0; i < groups.length ; i++) {   
        if(groupId === groups[i].id) {
            groups.splice(i, 1);
        }
    }
    return res.json({success:200, message:'The selected Group has been deleted'})
}
   
export const deleteNote = (req,res) => {
    let noteId = String(req.params.id).slice(1);
    let groupId = String(req.params.groupId).slice(1);

    for (let i=0; i< map.get(groupId).length; i++) {
        if (noteId === map.get(groupId)[i].id) {
            map.get(groupId).splice(i,1);
        }
    }
        
    for (let i = 0; i < groups.length; i++) {
        let group = groups[i];
        if (group.id === groupId) {
            group.count = group.count - 1; 
        }
        groups[i] = group;
    }
    return res.json({success:200, message:'The selected Note has been deleted'})
}
   
export const updateGroup = (req,res) => {
    let groupId = String(req.params.id).slice(1);
    for(let i = 0; i < groups.length; i++) {
    if(groupId === groups[i].id)
        groups.splice(i,1);
    }
    let group = req.body;
    groups.push({...group, id: groupId, count: map.get(groupId).length});
    
    return res.json({success:200, message:'The selected Group has been Updated'})
}

export const updateNote = (req,res)=>{
    let idnew = String(req.params.id).slice(1);
    for(let i=0;i<groups.length;i++) {
        if(idnew === groups[i].id) {
            groups.splice(i,1);
        }
    }
    let group = req.body;
    groups.push({...group, id: idnew});

    return res.json({success:200, message:'The selected Note has been Updated'})
}

export const getGroupName =  (req,res) => { 
    let groupId = String(req.params.id).slice(1);
    let name = '';

    for (let i = 0; i < groups.length; i++) {
        const group = groups[i]; 
        if (group.id === groupId) {
            name = group.title;
            break
        }
    }
    
    return res.json({name: name});
}
