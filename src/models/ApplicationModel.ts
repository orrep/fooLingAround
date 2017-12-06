import { observable, computed, action } from "mobx";
import Document from "./Editor/Document/Document";

export default class ApplicationModel {
    document : Document = new Document();


}