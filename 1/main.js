const Item = new NativeClass("Terraria", "Item");
const Player = new NativeClass("Terraria", "Player");

const Item_SetDefaults = Item["void SetDefaults(int Type, bool noMatCheck, ItemVariant variant)"];
const accessories = [];

let Timer = 0;
let CurrentWings = -1;

Item_SetDefaults.hook((original, self, type, noMatCheck, variant) => {
  original(self, type, noMatCheck, variant);
  self.expertOnly = self.masterOnly = false;
});

Player.UpdateEquips.hook((original, self, i) => {
  original(self, i);

  if (Timer++ % 300 === 0) {
    UpdateAccessory(self);
  }

  ApplyFromSocialSlot(self);
  if (CurrentWings > 0) {
    self.wings = CurrentWings;
    self.wingsLogic = CurrentWings;
    CurrentWings = -1;
  }
});

function UpdateAccessory(player) {
  accessories.length = 0;

  for (let i = 13; i < 18; i++) {
    const item = player.armor[i];
    if (item && item.accessory) {
      accessories.push(item);
    }
  }
}

function ApplyFromSocialSlot(player) {
  for (let i = 13; i < 18; i++) {
    const item = player.armor[i];

    if (item) {
      player.ApplyEquipFunctional(i, item);
      player.GrantPrefixBenefits(item);
      player.GrantArmorBenefits(item);

      if (item.wingSlot > 0) {
        CurrentWings = item.wingSlot;
      }
    }
  }
}