import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
        let input;
        function store(namespace, data) {
            if (data) {
                return localStorage.setItem(namespace, JSON.stringify(data));
            }

            var store = localStorage.getItem(namespace);
            return (store && JSON.parse(store)) || [];
        };
        return ( 
                <div>
            <h3>TODOMVC</h3>
                <form onSubmit = {
                e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    store(namespace, input.value)
                    input.value = ''
                }
            }>
            <input aref = { node => input = node }/>{ ' ' }
            <button type = "submit">任务项</button>
                </form> 
                </div>
        );
    }
export default connect()(AddTodo);
