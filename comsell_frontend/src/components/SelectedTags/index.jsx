import React from 'react';
import Tag from '../Tag';
import styles from './SelectedTags.module.scss';
const index = ({ tags, onTagClick }) => {
  return (
    <section class={styles.selected_tags_container}>
      <h2>Выбранные теги</h2>
      <div class={styles.selected_tags}>
        {tags.map((item, index) => (
          <Tag key={index} title={item} onClick={() => onTagClick(item)} />
        ))}
      </div>
    </section>
  );
};

export default index;
