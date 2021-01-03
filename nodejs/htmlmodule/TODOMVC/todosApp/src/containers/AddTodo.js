import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
// TODO: AddTodo
const AddTodo = ({ dispatch }) => {
        let input;

        function store(namespace, data) {
            if (data) {
                return localStorage.setItem(namespace, JSON.stringify(data));
            }

            var store = localStorage.getItem(namespace);
            return (store && JSON.parse(store)) || [];
        };
        return ( <
            div >
            <
            h3 > TODOMVC < /h3> <
            form onSubmit = {
                e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    store(namespace, input.value)
                    input.value = ''
                }
            } >
            <
            input ref = { node => input = node }
            />{ ' ' } <
            button type = "submit" > 新增任务项 < /button> <
            /form> <
            /div>
        );
    }
    // TODO: export
export default connect()(AddTodo);