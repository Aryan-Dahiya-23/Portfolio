import PropTypes from 'prop-types';

const SkillIcon = ({ src, alt }) => {
    return (
        <div className="img-container">
            <img src={src} alt={alt} className="cursor-pointer" />
        </div>
    );
};

SkillIcon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default SkillIcon;
