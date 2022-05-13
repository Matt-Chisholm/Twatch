import React from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
  componentDidMount() {
    fetchStream(this.props.match.params.id);
  }

  onSubmit = () => {
    console.log(formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading..</div>
    }
    return (
      <div>
        <h3>Edit your Stream!</h3>
        <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit} />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit);