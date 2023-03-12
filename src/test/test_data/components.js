import angular from "angular";
import todoListTpl from "./todo-list.html";
import './todo-list.css'

class TodoListCtrl {
    constructor() {
        this.items = [];
    }
    /**
     * 
     * @param {number} index 
     */
    onDeleteItem(index) {
        this.items.splice(index, 1);
    }

    onAddItem() {
        this.newItem = this.newItem?.trim();
        if (!this.newItem) {
            return;
        }
        if (!this.items.includes(this.newItem)) {
            this.items.push(this.newItem);
        }
        this.newItem = '';
    }
}

angular.module('componentWithClassCtrlModule', [])
    .component('componentWithClassCtrl', {
        controller: TodoListCtrl,
        template: todoListTpl,
        bindings: {
            items: '<',
        }
    })

const componentOnConstModuleConstName = angular.moodule('componentOnConstModuleModule', []);

componentOnConstModuleConstName.component('componentOnConstModule',  {
    controller: TodoListCtrl,
    template: todoListTpl,
    bindings: {
        items: '<',
    }
})