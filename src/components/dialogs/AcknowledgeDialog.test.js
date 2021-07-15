import React from 'react';
import { render, screen } from '@testing-library/react';

import AcknowledgeDialog from './AcknowledgeDialog';
import { Provider } from 'react-redux';
import store from "./../../redux/store";

describe('AcknowledgeDialog', () => {
    test('renders AcknowledgeDialog component', () => {
        render(
            <Provider store={store}>
                <AcknowledgeDialog isOpen={true} />
            </Provider>
        );

        screen.debug();
    });
});