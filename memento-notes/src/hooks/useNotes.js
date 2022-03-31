import { useContext } from 'react'
import {NoteContext} from '../context'

export const useNotes =()=>useContext(NoteContext);