const Player = new NativeClass("Terraria", "Player");

let Timer = 0;

Player.UpdateEquips.hook((original, self, i) => {
  original(self, i);

  // Call this every tick, no need to delay — TL Pro handles it fine
  ApplyVanityArmor(self);
});

function ApplyVanityArmor(player) {
  const head = player.armor[10]; // Vanity head
  const body = player.armor[11]; // Vanity body
  const legs = player.armor[12]; // Vanity legs

  // Defensive stat application
  if (head?.netID !== 0) {
    player.statDefense += head.defense;
    player.GrantArmorBenefits(head);
  }
  if (body?.netID !== 0) {
    player.statDefense += body.defense;
    player.GrantArmorBenefits(body);
  }
  if (legs?.netID !== 0) {
    player.statDefense += legs.defense;
    player.GrantArmorBenefits(legs);
  }

  // Set bonus check — basic example: Silver Armor (59,60,61)
  const types = [head?.type, body?.type, legs?.type];
  if (types[0] === 59 && types[1] === 60 && types[2] === 61) {
    player.setBonus = "Vanity Silver Set: +20 max HP";
    player.statLifeMax2 += 20;
  }

  // You can copy this block and add checks for other armor sets
}
