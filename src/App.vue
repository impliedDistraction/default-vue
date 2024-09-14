<template>
  <q-layout>
    <q-page>
      <q-dialog v-model="showDialog">
        <q-card>
          <q-card-section>
            <div class="text-h6">Filter Options</div>
          </q-card-section>

          <q-card-section>
            <!-- Your filter options go here -->
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              dense
              borderless
              no-caps
              class="q-mt-lg full-width"
              color="primary"
              label="Apply"
              @click="applyFilters"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-btn
        label="Open Dialog"
        color="primary"
        @click="showDialog = true"
      />
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { QLayout, QPage, QDialog, QCard, QCardSection, QCardActions, QBtn } from 'quasar';

export default {
  components: {
    QLayout,
    QPage,
    QDialog,
    QCard,
    QCardSection,
    QCardActions,
    QBtn,
  },
  setup() {
    const showDialog = ref(false);

    const applyFilters = () => {
      // Your filter logic here
      showDialog.value = false; // Close dialog after applying filters
    };

    return { showDialog, applyFilters };
  },
};
</script>
