import React from 'react';

function Loading(Component) {
    return function withLoadingComponent({ isLoading, data }) {
        if (isLoading) {
            return (
                <div class="position-absolute top-50 start-50 translate-middle  fs-5">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        } else {
            return (
                <Component data={data} />
            );
        }
    }
}

export default Loading;