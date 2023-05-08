import { withInstall } from '/@/utils';
import itemCodeCell from './src/ItemCodeCell.vue';
import itemNameCell from './src/itemNameCell.vue';
import quantityOrderCell from './src/QtyOrderCell.vue';
import dropDocumentItem from './src/DropDocumentItem.vue';
import documentDropdownButton from './src/DocumentDropdownButton.vue';

export const ItemCodeCell = withInstall(itemCodeCell);
export const ItemNameCell = withInstall(itemNameCell);
export const QtyOrderCell = withInstall(quantityOrderCell);
export const DropDocumentItem = withInstall(dropDocumentItem);
export const DocumentDropdownButton = withInstall(documentDropdownButton);

export function toFixedFloat(num: number): string {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
