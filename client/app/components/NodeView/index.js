/*
 *
 * NodeView
 * combines CollectionDetail and NodeExplore
 *
 */

import React from 'react';
import classNames from 'classnames'

import NodeGraph from '../../components/NodeGraph'
import AddButton from '../../components/AddButton'
import Spinner from '../../components/Spinner'
import AddNodeWindow from '../../components/AddNodeWindow'
import EditModeButton from '../../components/EditModeButton'
import FocusButton from '../../components/FocusButton'
import GraphModes from '../../components/GraphModes'
import GraphTypeSwitcher from '../../components/GraphTypeSwitcher'
import ExpandButton from '../../components/ExpandButton'
import AbstractionList from '../../containers/AbstractionList'
import AbstractionNavigator from '../../components/AbstractionNavigator'
import NodeEditorToolbar from '../../containers/NodeEditorToolbar'
import { HotKeys } from 'react-hotkeys';

import './styles.scss'


export class NodeView extends React.PureComponent {
    render() {
        const {
            nodeId,
            nodes,
            links,
            focus,
            mode,
            isLoading,
            graphType,
        } = this.props

        const handlers = {
            'escape': () => this.props.setGraphMode("view"),
            'navigateMode': () => this.props.setGraphMode("view"),
            'editMode': () => this.props.setGraphMode("edit"),
            'abstractMode': () => this.props.setGraphMode("abstract"),
            'focusMode': () => this.props.setGraphMode("focus"),
            'deleteMode': () => this.props.setGraphMode("delete"),
        }

        const appContainerClass = classNames("appContainer", {
            "abstractionList-pusher": this.props.abstractionSidebarOpened
        })

        return (
            <HotKeys className={appContainerClass}>
                <AddNodeWindow
                    graphType={graphType}
                    opened={mode === 'edit'}
                    activeNodeId={this.props.activeNodeId}
                    activeCollectionId={this.props.activeCollectionId}
                    disabled={isLoading}
                />
                <NodeEditorToolbar
                    id={this.props.activeNodeId || this.props.activeCollectionId}
                    page="node"
                    isLoading={isLoading}
                    node={this.props.activeNode || this.props.activeCollection}
                />
                <div className="contentContainer">
                        <NodeGraph
                            {...this.props}
                        />
                </div>
                <GraphTypeSwitcher
                    graphType={graphType}
                    id={this.props.activeNodeId || this.props.activeCollectionId}
                />
                <GraphModes
                    graphType={graphType}
                />
            </HotKeys>

        );
    }
}

export default NodeView
