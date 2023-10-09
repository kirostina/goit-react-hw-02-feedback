
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onFeedback}) {
    return (
        <ul>
            {options.map(item => {
                return (
                    <li key={item} type="button" onClick={() => onFeedback(item)}>
                        {item}
                    </li>
                );
            })}
        </ul>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFeedback: PropTypes.func.isRequired,
};